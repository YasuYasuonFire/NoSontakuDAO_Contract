#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]
        
#[openbrush::contract]
pub mod governance_token {
    // imports from ink!
	use ink_storage::traits::SpreadAllocate;

    // imports from openbrush
	use openbrush::traits::String;
	use openbrush::traits::Storage;
	use openbrush::contracts::psp22::extensions::burnable::*;
	use openbrush::contracts::psp22::extensions::mintable::*;
	use openbrush::contracts::psp22::extensions::metadata::*;

    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct Contract {
    	#[storage_field]
		psp22: psp22::Data,
		#[storage_field]
		metadata: metadata::Data,
    }
    
    // Section contains default implementation without any modifications
	impl PSP22 for Contract {}
	impl PSP22Burnable for Contract {}
	impl PSP22Mintable for Contract {
		#[ink(message)]
        fn mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
            self._mint_to(account, amount)
		}
	}
	impl PSP22Metadata for Contract {}
     
    impl Contract {
        #[ink(constructor)]
        pub fn new(name: Option<String>, symbol: Option<String>, decimal: u8) -> Self {
            ink_lang::codegen::initialize_contract(|_instance: &mut Contract|{
				// _instance._mint_to(_instance.env().caller(), initial_supply).expect("Should mint"); 
				_instance.metadata.name = name;
				_instance.metadata.symbol = symbol;
				_instance.metadata.decimals = decimal;
			})
        }
    }
}