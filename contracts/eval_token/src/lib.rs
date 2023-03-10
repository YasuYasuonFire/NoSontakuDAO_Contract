#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]
        
#[openbrush::contract]
pub mod eval_token {
    // imports from ink!
	use ink_storage::traits::SpreadAllocate;

    // imports from openbrush
	use openbrush::traits::String;
	use openbrush::traits::Storage;
	use openbrush::contracts::psp22::extensions::burnable::*;
	use openbrush::contracts::psp22::extensions::mintable::*;
	use openbrush::contracts::psp22::extensions::metadata::*;
	use openbrush::contracts::access_control::*;
	use openbrush::modifiers;
	


    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct Contract {
    	#[storage_field]
		psp22: psp22::Data,
		#[storage_field]
		metadata: metadata::Data,
		#[storage_field]
		access: access_control::Data,
    }

	const MINTER: RoleType = ink_lang::selector_id!("MINTER");

    // Section contains default implementation without any modifications
	impl PSP22 for Contract {}
	impl AccessControl for Contract {}
	impl PSP22Burnable for Contract {}
	
	impl PSP22Mintable for Contract {
		//override.Only MINTER can mint
		#[ink(message)]
        #[modifiers(only_role(MINTER))]
        fn mint(&mut self, account: AccountId, amount: Balance) -> Result<(), PSP22Error> {
            self._mint_to(account, amount)
		}
	}

	impl PSP22Metadata for Contract {}
     
    impl Contract {
        #[ink(constructor)]
        pub fn new(name: Option<String>, symbol: Option<String>, decimal: u8, account: AccountId) -> Self {
            ink_lang::codegen::initialize_contract(|_instance: &mut Contract|{
				//_instance._mint_to(_instance.env().caller(), initial_supply).expect("Should mint"); 
				//initial supply is zero
				let caller = _instance.env().caller();
                _instance._init_with_admin(caller);
                // We grant MINTER role to caller in constructor(dev1) adn govern contract
                _instance.grant_role(MINTER, caller).expect("Should grant MINTER role to caller");
				_instance.grant_role(MINTER, account).expect("Should grant MINTER role to govern contract");
				_instance.metadata.name = name;
				_instance.metadata.symbol = symbol;
				_instance.metadata.decimals = decimal;
			})
        }
    }
}