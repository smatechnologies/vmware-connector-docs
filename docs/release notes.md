# Release Notes 

### Version 21.0

#### General

The release removes log4j and replaces it with slj4j and logback.

The VMWare Connector supports two sub-type options:
Enterprise Manager

Enterprise Manager provides a sub-type plugin module that is copied into the Enterprise Manager plugins directory. The plugin provides a simple mechanism to create the commandline options required when executing the connector.

The sub-type exists as a Windows job sub-type VMWare.

Solution Manager

OpCon version 25.0.3 or greater includes the ACS framework. The ACS framework provides the sub-type mechanism supporting the VMware connector. It provides a mechanism to centralize the configuration file (Connector.config) within the OpCon environment and provides a wrapper to the VMWare connector.

THe supplied integration available from the FTP site in section integrations can be downloaded and the items extracted and copied into the \plugins\ACSVMWare directory.

The implementation exists as an ACS Agent VMWare and associated job with several task types.

#### Migration Considerations

This release includes the new format installer where the files are extracted from the zip file into the desired directory. 
It contains an embedded java version for the connector so there is no reliance on installed Java versions.

The configuration file has been changed from Agent.config to Connector.config.

The connector implements new encryption capabilities and the documentation explains how to use the new Encrypt.exe mechanism.

:white_check_mark: **CONNUTIL-537** CVE-2021-44228 adjustment removing log4j as the logging component. 

### Version 17.0

#### 2017 May

:white_check_mark: Fixed an issue with the password encryption instructions for VMWARE_USER_PASSWORD.

:eight_spoked_asterisk:	Updated the VMWare Connector to support VMWare version 6.5.
	
:eight_spoked_asterisk: Added a new Operation, DELETE, to the VMWare Job Sub-Type which provides the ability to delete a virtual machine. The ability to delete a virtual machine requires special privileges for the VMWare user as well as the capability enabled in Connector configuration.
	
:eight_spoked_asterisk: Added a new Information Task, GETSUMMARY, that retrieves information about the installation and includes a list of Datastores and Hosts.
	
:eight_spoked_asterisk: Updated the GETPOWEREDOFFLIST Information Task to use dates instead of day count.

### Version 16.2

#### 2016 December

:eight_spoked_asterisk: Added two new Operations to the VMWare Job Sub-Type: Clone and Information.

:eight_spoked_asterisk: Added the ability to define a Datacenter Name to be associated with the VMWare installation.