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
- The `VMWARE_USER_PASSWORD` value must be encoded with `Encrypt.exe`, which is extracted alongside the connector. Refer to [Encode the VMWare password](#encode-the-vmware-password).

## Configuration sections

`Connector.config` contains two sections you typically edit:

- `[CONNECTOR]` — connector-wide settings (output directory, debug mode).
- `[VMWARE INFORMATION]` — connection details for the VMWare host (address, user, password, delete privileges).

### [CONNECTOR] section

| Setting | Description | Required |
| ------- | ----------- | -------- |
| `NAME` | The name of the connector. Do not change this value. | No |
| `JOB_OUTPUT_DIRECTORY` | Present in the file but not used. See the note below. | No |
| `DEBUG` | Turns debug logging on or off. Valid values: `ON` or `OFF`. | Yes |

:::caution `DEBUG` must be present
The connector reads `DEBUG` without a fallback, so removing the line stops the job with an initiation error before it reaches VMWare. Set it to `OFF` rather than deleting it. The same applies to `VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED` in the next section.
:::

:::note `JOB_OUTPUT_DIRECTORY` has no effect
The connector writes job output to a `JobOutput` directory under the directory it runs from, and creates that directory if it does not exist. The value in the configuration file is read and then replaced with that path, so changing it does nothing.
:::

### [VMWARE INFORMATION] section

| Setting | Description | Required |
| ------- | ----------- | -------- |
| `VMWARE_HOST_ADDRESS` | The address of the host providing VMWare web services. Supports vCenter or ESXi 5.5. Example: `https://192.168.192.155/sdk` | Yes |
| `VMWARE_USER` | A VMWare user with the privileges required for the operations you plan to run. For a Windows user, prefix the user name with the domain and two backslashes (for example, `domain\\user`). | Yes |
| `VMWARE_USER_PASSWORD` | The encoded password for `VMWARE_USER`. Produce the value with `Encrypt.exe` before pasting it here, and use ASCII characters only. Refer to [Encode the VMWare password](#encode-the-vmware-password). | Yes |
| `VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED` | Set to `TRUE` to allow the connector to delete virtual machines. Requires the VMWare user to also have the `VirtualMachine.Inventory.Delete` privilege. Set it to `FALSE` when deletion is not required. Read without a fallback, so the line must be present. | Yes |

:::caution
Setting `VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED=TRUE` enables irreversible deletion. Once a delete is issued, the virtual machine cannot be recovered.
:::

## Encode the VMWare password

`Connector.config` does not hold the VMWare password as plain text. Encode it first with
`Encrypt.exe`, which is extracted into the same directory as the connector.

To encode the password, complete the following steps:

1. Open a command prompt in the directory where you extracted the connector.
2. Run `Encrypt.exe` with the password as the value of the `-v` argument:

   ```
   Encrypt.exe -v ChangeMe123
   ```

3. Copy the value that follows `ev :` in the output.

   ```
   ev : 51326868626d646c545755784d6a4d3d
   ```

4. Paste that value into `VMWARE_USER_PASSWORD` in `Connector.config`.

:::caution Use ASCII characters only
The encoding uses the character set of the machine that produced it. A password containing accented or non-Latin characters is only guaranteed to decode on a machine with the same system locale as the one where you ran `Encrypt.exe`. If you copy `Connector.config` to another machine and the VMWare sign-in fails, run `Encrypt.exe` again on that machine and replace the value.
:::

:::note
The value is encoded rather than encrypted, and the encoding is reversible without a key. Treat `Connector.config` as a file that contains a password: restrict who can read it, and do not paste the value into a ticket or an email.
:::

## Example Connector.config

```
[CONNECTOR]
NAME=VMWare Connector
JOB_OUTPUT_DIRECTORY=JobOutput
DEBUG=OFF

[VMWARE INFORMATION]
VMWARE_HOST_ADDRESS=https://192.168.192.155/sdk
VMWARE_USER=SMAEUROPE\\VUser
VMWARE_USER_PASSWORD=51326868626d646c545755784d6a4d3d
VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED=False
```

## Logging and job output

The connector writes its log to `log\vmware.log`, in the directory it runs from. Logs cover both connector activity and the jobs the connector runs. Information is appended, and error messages and return codes are visible there.

When `vmware.log` reaches 100 MB, it is rolled into a month-stamped subdirectory as `log\<yyyy-MM>\vmware_<yyyy-MM-dd>.<n>.log`.

:::caution Rolled logs are not removed automatically
No retention limit is configured, so rolled log files accumulate until something removes them. Include the `log` directory in whatever housekeeping the machine already has.
:::

:::note
The `log` directory also holds `powered_down_list.xml`, which is how the INFORMATION operation remembers when it first saw a virtual machine powered off. Deleting the `log` directory resets that tracking, and the next GETPOWEREDOFFLIST run behaves like a first run. Refer to [Enterprise Manager job definition](em-job-definition.md#information).
:::

Job output is written to a `JobOutput` directory under the directory the connector runs from.

## What's next

- Define your first VMWare job in [Enterprise Manager job definition](em-job-definition.md) or [Solution Manager job definition](sm-job-definition.md).

## FAQs

**Where do I configure VMWare credentials?**

Set `VMWARE_USER` and `VMWARE_USER_PASSWORD` in the `[VMWARE INFORMATION]` section of `Connector.config`. Encode the password with `Encrypt.exe` before you paste it, using ASCII characters only. Refer to [Encode the VMWare password](#encode-the-vmware-password).

**The VMWare sign-in fails after I copied Connector.config to another machine. Why?**

The password encoding depends on the character set of the machine that produced it. If the password contains accented or non-Latin characters, the value only decodes reliably on a machine with the same system locale. Run `Encrypt.exe` on the target machine and replace the `VMWARE_USER_PASSWORD` value.

**How do I enable virtual machine deletion?**

Set `VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED=TRUE` in the `[VMWARE INFORMATION]` section, and ensure the VMWare user also has the `VirtualMachine.Inventory.Delete` privilege. Once a delete is issued, the virtual machine cannot be recovered.

**How do I turn on debug logging?**

In the `[CONNECTOR]` section, set `DEBUG=ON`. The shipped configuration file has `DEBUG=OFF`. The setting has no default of its own, so leave the line in place and change the value.

**Where are the log files?**

The current log is `log\vmware.log`, in the directory the connector runs from. Rolled logs are in month-stamped subdirectories under `log`. No retention limit is configured, so they accumulate until something removes them.

**Can I change where job output is written?**

Not in this release. The connector writes job output to a `JobOutput` directory under the directory it runs from. The `JOB_OUTPUT_DIRECTORY` setting is read from the file and then replaced with that path, so changing it has no effect.

**Wasn't this file called Agent.config?**

It was, in releases before 21.0. Release 21.0 renamed the file to `Connector.config`. For details, refer to [Release notes](release-notes.md).

## Glossary

| Term | Definition |
|---|---|
| VMWare Connector | An OpCon connector that submits job requests to VMWare web services from an OpCon schedule. |
| Connector.config | The VMWare Connector configuration file. All settings in the file apply to the machine on which it resides. Replaces the earlier `Agent.config` file from release 21.0 onward. |
| vCenter | The VMWare server providing the VMWare web services interface. The connector supports vCenter or ESXi 5.5. |
| ESXi | The VMWare hypervisor providing the VMWare web services interface. The connector supports vCenter or ESXi 5.5. |
| Encrypt.exe | The tool that encodes the VMWare password for `Connector.config`. Extracted into the same directory as the connector. |
| Enterprise Manager | The legacy Windows desktop interface for OpCon. Hosts the VMWare job sub-type. |
