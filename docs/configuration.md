---
sidebar_label: 'Configuration'
title: VMWare Connector configuration
description: "Configure the VMWare Connector by updating the Connector.config file before running your first job."
tags:
  - Procedural
  - Reference
  - System Administrator
  - Installation
---

# VMWare Connector configuration

## What is it?

The `Connector.config` file holds the settings the VMWare Connector uses to talk to VMWare web services and to write job output. Update this file once after you install the connector, and revisit it whenever you change your VMWare host, credentials, or output directory.

:::note
The configuration file was named `Agent.config` in releases before 21.0. From release 21.0 onward, it is named `Connector.config`. For details, refer to [Release notes](release-notes.md).
:::

## Before you start

- The connector is installed. Refer to [Installation](installation.md).
- All settings in `Connector.config` apply to the machine on which the file resides.
- The file is in the connector installation directory (for example, `C:\Program Files\OpConxps\VMWare x64\Connector.config`).
- Update the file with a text editor that preserves plain text (such as Notepad).
- The `VMWARE_USER_PASSWORD` value must be encrypted using the Password Encryption Tool available in the **Enterprise Manager Password Update Menu**.

## Configuration sections

`Connector.config` contains two sections you typically edit:

- `[CONNECTOR]` — connector-wide settings (output directory, debug mode).
- `[VMWARE INFORMATION]` — connection details for the VMWare host (address, user, password, delete privileges).

### [CONNECTOR] section

| Setting | Description |
| ------- | ----------- |
| `NAME` | The name of the connector. Do not change this value. |
| `JOB_OUTPUT_DIRECTORY` | The directory where the connector places job output files. Must end with a trailing `\\` or `/`. See the path-format note below. |
| `DEBUG` | Turns debug logging on or off. Valid values: `ON` or `OFF`. Default: `OFF`. |

:::note Path format
The backslash (`\`) is a special Java character. In `JOB_OUTPUT_DIRECTORY`, escape each backslash as `\\` (for example, `c:\\VMWare\\JobOutput\\`), or use forward slashes (for example, `c:/VMWare/JobOutput/`).
:::

### [VMWARE INFORMATION] section

| Setting | Description |
| ------- | ----------- |
| `VMWARE_HOST_ADDRESS` | The address of the host providing VMWare web services. Supports vCenter or ESXi 5.5. Example: `https://192.168.192.155/sdk` |
| `VMWARE_USER` | A VMWare user with the privileges required for the operations you plan to run. For a Windows user, prefix the user name with the domain and two backslashes (for example, `domain\\user`). |
| `VMWARE_USER_PASSWORD` | The encrypted password for `VMWARE_USER`. Encrypt the password with the Password Encryption Tool in the **Enterprise Manager Password Update Menu** before pasting it here. |
| `VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED` | Set to `TRUE` to allow the connector to delete virtual machines. Requires the VMWare user to also have the `VirtualMachine.Inventory.Delete` privilege. Default: `FALSE`. |

:::caution
Setting `VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED=TRUE` enables irreversible deletion. Once a delete is issued, the virtual machine cannot be recovered.
:::

## Example Connector.config

```
[CONNECTOR]
NAME=VMWare Connector
JOB_OUTPUT_DIRECTORY=c:\\VMWARE\\JobOutput
DEBUG=OFF

[VMWARE INFORMATION]
VMWARE_HOST_ADDRESS=https://192.168.192.155/sdk
VMWARE_USER=SMAEUROPE\\VUser
VMWARE_USER_PASSWORD=0744f7165dc3185a5da9cb67147218e3ee9d98c80be73810ee9
d98c80be73810
VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED=False
```

## Logging and job output

The connector keeps a maximum cycle of five log files. Logs cover both connector activity and the jobs the connector runs. Log files are in the `<installation root>\log` directory.

Information is appended to the log files. Error messages and return codes are visible there.

## What's next

- Define your first VMWare job in [Enterprise Manager job definition](em-job-definition.md) or [Solution Manager job definition](sm-job-definition.md).

## FAQs

**Where do I configure VMWare credentials?**

Set `VMWARE_USER` and `VMWARE_USER_PASSWORD` in the `[VMWARE INFORMATION]` section of `Connector.config`. Encrypt the password using the Password Encryption Tool in the **Enterprise Manager Password Update Menu** before you paste it.

**How do I enable virtual machine deletion?**

Set `VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED=TRUE` in the `[VMWARE INFORMATION]` section, and ensure the VMWare user also has the `VirtualMachine.Inventory.Delete` privilege. Once a delete is issued, the virtual machine cannot be recovered.

**How do I turn on debug logging?**

In the `[CONNECTOR]` section, set `DEBUG=ON`. The default is `OFF`.

**Where are the log files?**

In the `<installation root>\log` directory. The connector keeps a maximum cycle of five log files.

**Why doesn't the connector accept my path?**

Check that the path ends with a trailing `\\` or `/`, and that backslashes are escaped as `\\` (for example, `c:\\VMWare\\JobOutput\\`). Forward slashes are also accepted (for example, `c:/VMWare/JobOutput/`).

**Wasn't this file called Agent.config?**

It was, in releases before 21.0. Release 21.0 renamed the file to `Connector.config`. For details, refer to [Release notes](release-notes.md).

## Glossary

| Term | Definition |
|---|---|
| VMWare Connector | An OpCon connector that submits job requests to VMWare web services from an OpCon schedule. |
| Connector.config | The VMWare Connector configuration file. All settings in the file apply to the machine on which it resides. Replaces the earlier `Agent.config` file from release 21.0 onward. |
| vCenter | The VMWare server providing the VMWare web services interface. The connector supports vCenter or ESXi 5.5. |
| ESXi | The VMWare hypervisor providing the VMWare web services interface. The connector supports vCenter or ESXi 5.5. |
| Enterprise Manager | The legacy Windows desktop client for OpCon. Hosts the Password Encryption Tool used to encrypt the VMWare user password. |
