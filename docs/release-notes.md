---
sidebar_label: 'Release notes'
title: VMWare Connector release notes
description: "Version history and change details for the VMWare Connector, including new features, improvements, and bug fixes."
tags:
  - Reference
  - System Administrator
  - Connectors
---

# VMWare Connector release notes

## 21

### 21.0.1

### What's new

:white_check_mark: The connector executable was renamed to `vmware.exe`. The Enterprise Manager sub-type builds its command line from this name, so the **VMWarePath** global property must contain the directory that holds it. Refer to [Configure the VMWarePath global property](installation.md#configure-the-vmwarepath-global-property).

### 21.0

### What's new

The VMWare Connector supports two sub-type options:

**Enterprise Manager**

Enterprise Manager provides a sub-type plugin module that is copied into the Enterprise Manager plugins directory. The plugin provides a simple mechanism to create the command line options required when running the connector.

The sub-type exists as a Windows job sub-type VMWare.

**Solution Manager**

OpCon version 25.0.3 or greater includes the ACS framework. The ACS framework provides the sub-type mechanism supporting the VMWare connector. It provides a mechanism to centralize the configuration file (Connector.config) within the OpCon environment and provides a wrapper to the VMWare connector.

The supplied integration available from the FTP site in section integrations can be downloaded and the items extracted and copied into the `\plugins\ACSVMWare` directory.

The implementation exists as an ACS Agent VMWare and associated job with several task types.

This release also includes the new format installer where the files are extracted from the zip file into the desired directory. It contains an embedded Java version for the connector so there is no reliance on installed Java versions.

The configuration file has been changed from Agent.config to Connector.config.

The connector implements new encryption capabilities and the documentation explains how to use the new Encrypt.exe mechanism.

:white_check_mark: **CONNUTIL-537**: CVE-2021-44228 adjustment removing log4j as the logging component. Replaced log4j with slf4j and logback.

### Why this matters

Removing log4j and replacing it with slf4j and logback addresses CVE-2021-44228 (Log4Shell), removing a known critical vulnerability from the connector. The new format installer with embedded Java removes the dependency on a separately installed Java Runtime Environment, simplifying installation and upgrades. The Solution Manager sub-type lets you manage the connector configuration centrally in OpCon rather than file-based per-machine configuration.

## 17

### 17.0

2017 May

### What's new

:eight_spoked_asterisk: **VMWare 6.5 support**: Updated the VMWare Connector to support VMWare version 6.5.

:eight_spoked_asterisk: **DELETE operation**: Added a new Operation, DELETE, to the VMWare Job Sub-Type which provides the ability to delete a virtual machine. The ability to delete a virtual machine requires special privileges for the VMWare user as well as the capability enabled in Connector configuration.

:eight_spoked_asterisk: **GETSUMMARY information task**: Added a new Information Task, GETSUMMARY, that retrieves information about the installation and includes a list of Datastores and Hosts.

:eight_spoked_asterisk: **GETPOWEREDOFFLIST date filter**: Updated the GETPOWEREDOFFLIST Information Task to use dates instead of day count.

:white_check_mark: Fixed an issue with the password encryption instructions for VMWARE_USER_PASSWORD.

## 16

### 16.2

2016 December

### What's new

:eight_spoked_asterisk: **Clone and Information operations**: Added two new Operations to the VMWare Job Sub-Type: Clone and Information.

:eight_spoked_asterisk: **Datacenter name**: Added the ability to define a Datacenter Name to be associated with the VMWare installation.
