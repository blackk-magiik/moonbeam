(function() {var implementors = {};
implementors["moonbase_runtime"] = [{"text":"impl OnRuntimeUpgrade for <a class=\"struct\" href=\"moonbase_runtime/struct.MaintenanceHooks.html\" title=\"struct moonbase_runtime::MaintenanceHooks\">MaintenanceHooks</a>","synthetic":false,"types":["moonbase_runtime::MaintenanceHooks"]}];
implementors["moonbeam_runtime"] = [{"text":"impl OnRuntimeUpgrade for <a class=\"struct\" href=\"moonbeam_runtime/struct.MaintenanceHooks.html\" title=\"struct moonbeam_runtime::MaintenanceHooks\">MaintenanceHooks</a>","synthetic":false,"types":["moonbeam_runtime::MaintenanceHooks"]}];
implementors["moonriver_runtime"] = [{"text":"impl OnRuntimeUpgrade for <a class=\"struct\" href=\"moonriver_runtime/struct.MaintenanceHooks.html\" title=\"struct moonriver_runtime::MaintenanceHooks\">MaintenanceHooks</a>","synthetic":false,"types":["moonriver_runtime::MaintenanceHooks"]}];
implementors["pallet_asset_manager"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/migrations/struct.UnitsWithAssetType.html\" title=\"struct pallet_asset_manager::migrations::UnitsWithAssetType\">UnitsWithAssetType</a>&lt;T&gt;","synthetic":false,"types":["pallet_asset_manager::migrations::UnitsWithAssetType"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/migrations/struct.PopulateAssetTypeIdStorage.html\" title=\"struct pallet_asset_manager::migrations::PopulateAssetTypeIdStorage\">PopulateAssetTypeIdStorage</a>&lt;T&gt;","synthetic":false,"types":["pallet_asset_manager::migrations::PopulateAssetTypeIdStorage"]},{"text":"impl&lt;T, StatemineParaIdInfo, StatemineAssetsInstanceInfo&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/migrations/struct.ChangeStateminePrefixes.html\" title=\"struct pallet_asset_manager::migrations::ChangeStateminePrefixes\">ChangeStateminePrefixes</a>&lt;T, StatemineParaIdInfo, StatemineAssetsInstanceInfo&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;StatemineParaIdInfo: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;StatemineAssetsInstanceInfo: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"pallet_asset_manager/pallet/trait.Config.html#associatedtype.AssetType\" title=\"type pallet_asset_manager::pallet::Config::AssetType\">AssetType</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;MultiLocation&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;MultiLocation&gt;,&nbsp;</span>","synthetic":false,"types":["pallet_asset_manager::migrations::ChangeStateminePrefixes"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/migrations/struct.PopulateSupportedFeePaymentAssets.html\" title=\"struct pallet_asset_manager::migrations::PopulateSupportedFeePaymentAssets\">PopulateSupportedFeePaymentAssets</a>&lt;T&gt;","synthetic":false,"types":["pallet_asset_manager::migrations::PopulateSupportedFeePaymentAssets"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_asset_manager/pallet/trait.Config.html\" title=\"trait pallet_asset_manager::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_asset_manager/pallet/struct.Pallet.html\" title=\"struct pallet_asset_manager::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_asset_manager::pallet::Pallet"]}];
implementors["pallet_author_mapping"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_author_mapping/pallet/trait.Config.html\" title=\"trait pallet_author_mapping::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_author_mapping/migrations/struct.TwoXToBlake.html\" title=\"struct pallet_author_mapping::migrations::TwoXToBlake\">TwoXToBlake</a>&lt;T&gt;","synthetic":false,"types":["pallet_author_mapping::migrations::TwoXToBlake"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_author_mapping/pallet/trait.Config.html\" title=\"trait pallet_author_mapping::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_author_mapping/pallet/struct.Pallet.html\" title=\"struct pallet_author_mapping::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_author_mapping::pallet::Pallet"]}];
implementors["pallet_ethereum_chain_id"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_ethereum_chain_id/pallet/trait.Config.html\" title=\"trait pallet_ethereum_chain_id::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_ethereum_chain_id/pallet/struct.Pallet.html\" title=\"struct pallet_ethereum_chain_id::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_ethereum_chain_id::pallet::Pallet"]}];
implementors["pallet_maintenance_mode"] = [{"text":"impl&lt;T&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_maintenance_mode/struct.ExecutiveHooks.html\" title=\"struct pallet_maintenance_mode::ExecutiveHooks\">ExecutiveHooks</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"pallet_maintenance_mode/pallet/trait.Config.html\" title=\"trait pallet_maintenance_mode::pallet::Config\">Config</a>,&nbsp;</span>","synthetic":false,"types":["pallet_maintenance_mode::types::ExecutiveHooks"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_maintenance_mode/pallet/trait.Config.html\" title=\"trait pallet_maintenance_mode::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_maintenance_mode/pallet/struct.Pallet.html\" title=\"struct pallet_maintenance_mode::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_maintenance_mode::pallet::Pallet"]}];
implementors["pallet_migrations"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_migrations/pallet/trait.Config.html\" title=\"trait pallet_migrations::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_migrations/pallet/struct.Pallet.html\" title=\"struct pallet_migrations::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_migrations::pallet::Pallet"]}];
implementors["pallet_proxy_genesis_companion"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"pallet_proxy_genesis_companion/pallet/trait.Config.html\" title=\"trait pallet_proxy_genesis_companion::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"pallet_proxy_genesis_companion/pallet/struct.Pallet.html\" title=\"struct pallet_proxy_genesis_companion::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["pallet_proxy_genesis_companion::pallet::Pallet"]}];
implementors["parachain_staking"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"parachain_staking/migrations/struct.PatchIncorrectDelegationSums.html\" title=\"struct parachain_staking::migrations::PatchIncorrectDelegationSums\">PatchIncorrectDelegationSums</a>&lt;T&gt;","synthetic":false,"types":["parachain_staking::migrations::PatchIncorrectDelegationSums"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"parachain_staking/migrations/struct.SplitCandidateStateToDecreasePoV.html\" title=\"struct parachain_staking::migrations::SplitCandidateStateToDecreasePoV\">SplitCandidateStateToDecreasePoV</a>&lt;T&gt;","synthetic":false,"types":["parachain_staking::migrations::SplitCandidateStateToDecreasePoV"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"parachain_staking/migrations/struct.IncreaseMaxDelegationsPerCandidate.html\" title=\"struct parachain_staking::migrations::IncreaseMaxDelegationsPerCandidate\">IncreaseMaxDelegationsPerCandidate</a>&lt;T&gt;","synthetic":false,"types":["parachain_staking::migrations::IncreaseMaxDelegationsPerCandidate"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"parachain_staking/migrations/struct.PurgeStaleStorage.html\" title=\"struct parachain_staking::migrations::PurgeStaleStorage\">PurgeStaleStorage</a>&lt;T&gt;","synthetic":false,"types":["parachain_staking::migrations::PurgeStaleStorage"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"parachain_staking/pallet/trait.Config.html\" title=\"trait parachain_staking::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"parachain_staking/pallet/struct.Pallet.html\" title=\"struct parachain_staking::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["parachain_staking::pallet::Pallet"]}];
implementors["runtime_common"] = [{"text":"impl&lt;T:&nbsp;BaseFeeConfig&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"runtime_common/migrations/struct.BaseFeePerGas.html\" title=\"struct runtime_common::migrations::BaseFeePerGas\">BaseFeePerGas</a>&lt;T&gt;","synthetic":false,"types":["runtime_common::migrations::BaseFeePerGas"]}];
implementors["xcm_transactor"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"xcm_transactor/pallet/trait.Config.html\" title=\"trait xcm_transactor::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"xcm_transactor/migrations/struct.MaxTransactWeight.html\" title=\"struct xcm_transactor::migrations::MaxTransactWeight\">MaxTransactWeight</a>&lt;T&gt;","synthetic":false,"types":["xcm_transactor::migrations::MaxTransactWeight"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"xcm_transactor/pallet/trait.Config.html\" title=\"trait xcm_transactor::pallet::Config\">Config</a>&gt; OnRuntimeUpgrade for <a class=\"struct\" href=\"xcm_transactor/pallet/struct.Pallet.html\" title=\"struct xcm_transactor::pallet::Pallet\">Pallet</a>&lt;T&gt;","synthetic":false,"types":["xcm_transactor::pallet::Pallet"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()