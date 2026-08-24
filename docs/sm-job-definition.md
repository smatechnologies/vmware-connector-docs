---
sidebar_label: 'Solution Manager job definition'
title: Solution Manager job definition
description: "Define a VMWare job in Solution Manager using the VMWare job type and operation task details."
tags:
  - Reference
  - Procedural
  - Automation Engineer
  - Jobs
  - Solution Manager
---

# Solution Manager job definition

## What is it?

Solution Manager includes a **VMWare** job type that builds the command line for each supported VMWare operation. You select the VMWare integration that holds the connector configuration, then provide the per-operation fields.

This page is the field-by-field reference for that job type.

**Who this is for:** Automation Engineers defining VMWare jobs in Solution Manager.

:::note Using Enterprise Manager instead?
If your team defines jobs in Enterprise Manager rather than Solution Manager, refer to [Enterprise Manager job definition](em-job-definition.md).
:::

## Before you start

- You run OpCon 25.0.3 or greater.
- The VMWare Connector is installed on the target Windows machine. Refer to [Installation](installation.md).
- The Solution Manager sub-type is installed and the VMWare agent definition is created in Solution Manager. Refer to [Solution Manager path](installation.md#solution-manager-path).
- A `Connector.config` script exists in Solution Manager and is bound to the agent. Refer to [Create the Connector.config script](installation.md#create-the-connectorconfig-script).

## Integration selection

Every VMWare job in Solution Manager points to a VMWare integration that holds the connector configuration.

**Integrations or Integration Group**: Defines the VMWare machine that is associated with the connector.

## Operations at a glance

The VMWare job type exposes the following operations. Each operation has its own task details, documented below.

| Operation | What it does | Section |
|---|---|---|
| BACKUP | Creates an offline backup of a VMWare instance. | [BACKUP](#backup) |
| CLONE | Creates a virtual machine from an existing machine or template. | [CLONE](#clone) |
| DELETE | Deletes a virtual machine from the VMWare environment. | [DELETE](#delete) |
| INFORMATION | Produces a report from the VMWare environment. | [INFORMATION](#information) |
| POWEROPS | Performs a power action on a VMWare instance or guest OS. | [POWEROPS](#powerops) |
| RECONFIGURE | Changes the number of CPUs or the memory size of a virtual machine. | [RECONFIGURE](#reconfigure) |
| SNAPSHOT | Creates, removes, or reverts a snapshot. | [SNAPSHOT](#snapshot) |

## Task details

### BACKUP

Use a BACKUP job to create an offline backup of a VMWare instance. During the backup, the VMWare instance is shut down, the backup is performed, and the VMWare instance is restarted after the backup completes.

The BACKUP operation contains the following fields:

- **Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
- **Virtual Machine Name**: Defines the name of a virtual machine in the target host system to perform the operation on.
- **Backup Tasks**: Defines the type of BACKUP task to perform: BACKUPVM.
- **Executable or Script**: Defines the backup software executable or script.
- **Software Directory**: Defines the directory where the backup executable or script is located.
- **Parameters**: Defines parameters that the backup software or script requires.
- **Return Code**: Defines the return code that the backup software uses to indicate that the backup finished OK.

### CLONE

Use a CLONE job to create a virtual machine from an existing VMWare machine or a clone. When you create a machine from an existing machine, the existing machine must be in a powered-off state.

:::note
For CLONE, you must specify a valid value in the **Datacenter Name** field.
:::

The CLONE operation contains the following fields:

- **Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
- **Clone Tasks**: Defines the type of CLONE task to perform: CLONEVM.
- **Clone From Virtual Machine Name**: Defines the name of the virtual machine to clone from. The virtual machine must be in a powered-off state.
- **Cloned Virtual Machine Name**: Defines the name to be given to the new virtual machine.
- **Virtual Machine is a Template**: If the virtual machine to clone from is a template, select this option.
- **VMWare Host Name**: If the virtual machine is a template, specifies the host name on which the virtual machine must be created.

### DELETE

Use a DELETE job to delete a virtual machine from the VMWare environment.

:::caution
Once the delete command runs, the virtual machine is not recoverable, because the virtual machine storage is removed from the datastore. This operation requires the `VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED` configuration value to be set to `True`. Refer to [Configuration](configuration.md).
:::

The DELETE operation contains the following fields:

- **Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
- **Delete Tasks**: Defines the type of DELETE task to perform: DELETEVM.
- **Virtual Machine Name**: Defines the name of the virtual machine to delete.

### INFORMATION

Use an INFORMATION job to produce a report from the VMWare environment.

You can produce a report that lists virtual machines that have been in a powered-off state for a defined number of days.

:::note First-run behavior
The actual powered-off date is not always available from the virtual machine information. The connector sets the initial powered-off date when it first detects the machine in a powered-off state. As a result, the first time the task runs, no virtual machines appear in the list — the powered-off date is set to the current date and the powered-off threshold has not yet been exceeded. If a virtual machine on the list is later powered up, it is removed from the list.
:::

The INFORMATION operation contains the following fields:

- **Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
- **Information Tasks**: Defines the type of INFORMATION task to perform:
    - **GETPOWEREDOFFLIST**: Retrieves a list of machines that have been powered off for a time equal to or greater than the number of Powered Off Days.
    - **GETSUMMARY**: Retrieves a summary of the Datacenter or Datacenters. The summary includes:
        - **Datastores** — remaining free space, hosts associated with the datastore, and virtual machines associated with the datastore.
        - **Hosts** — virtual machines associated with the host, including operating system, status, and VMWare Tools status.
- **Powered Off Days**: Used with GETPOWEREDOFFLIST. Defines how many days the virtual machine must be powered off before it appears in the report.

### POWEROPS

Use a POWEROPS job to perform a power action on the VMWare server or the guest operating system.

On the **POWEROPS Operation** tab, select the task from the list, then either enter a single virtual machine in **Virtual Machine Name** or add multiple virtual machines to **Virtual Machine Group**.

:::note Group operations
The group capability is supported only for POWEROFF, POWERON, SHUTDOWN, and SUSPEND. The **Virtual Machine Group** field is disabled for tasks that do not support it.
:::

The POWEROPS operation contains the following fields:

- **Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
- **PowerOps Tasks**: Defines the type of POWEROPS task to perform: POWEROFF, POWERON, REBOOT, RESET, SHUTDOWN, STANDBY, or SUSPEND.
- Virtual Machine drop down list
  - **VM Name**: Select VM Name to enter a single virtual machine in the VM Name field to perform the operation on.
  - **VM Group Names**: Select VM Group Nmaes to insert a group of virtual machines tp perform the operation on. 
    - To add a virtual machine to the list, select the **+ AddItem** button and enter the name of the virtual machine.
    - To update the name of a virtual machine, update the name in the **VM Group Names** list.
    - To remove a virtual machine from the list, select the **-** button to the right of the field.

### RECONFIGURE

Use a RECONFIGURE job to change the number of CPUs or the memory size of a virtual machine.

:::note Hot-plug requirements
For dynamic CPU and memory changes, hot-plug must be enabled in **VMWare Settings > Options > Memory/CPU hotplug**, and the guest operating system must support dynamic reconfiguration. If the guest OS does not support it, the virtual machine must be restarted to apply the change. Some operating systems support adding CPUs and memory dynamically but not removing them.
:::

The RECONFIGURE operation contains the following fields:

- **Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
- **Reconfiguration Tasks**: Defines the type of RECONFIGURE task to perform: CHANGEVM.
- **Virtual Machine Name**: Defines the name of a virtual machine in the target host system to perform the operation on.
- **Required No of CPUs**: Defines the number of CPUs to set in the configuration.
- **Required Memory Size (MB)**: Defines the memory size to set in the configuration. The memory size is defined in MB (for example, `4096`, `8192`).
- **Restart Server**: If the virtual machine operating system does not support dynamic configuration, selecting this option results in the operating system being shut down, the configuration update being applied, and the virtual machine being restarted.

### SNAPSHOT

Use a SNAPSHOT job to create, remove, or revert a snapshot of a virtual machine.

The SNAPSHOT operation contains any of the following fields:

- **Datacenter Name**: Defines the name of the vSphere Datacenter when using the CLONE operation.
- **SnapShot Tasks**: Defines the type of SNAPSHOT task to perform: CREATE, REMOVE, or REVERT.
- **Virtual Machine Name**: Defines the name of a virtual machine in the target host system to perform the operation on.
- **Name**: Defines the snapshot name. Its meaning depends on the task:
    - **CREATE** — the name of the snapshot to create for the virtual machine in **Virtual Machine Name**.
    - **REMOVE** — the name of an existing snapshot to remove for the virtual machine in **Virtual Machine Name**.
    - **REVERT** — the name of the snapshot to revert to for the virtual machine in **Virtual Machine Name**.
- **Remove Child SnapShots**: For REMOVE only — also removes any child snapshots associated with the snapshot.

## FAQs

**Where do I associate the connector with a job in Solution Manager?**

Use the **Integrations or Integration Group** field. It defines the VMWare machine that is associated with the connector.

**Why is the Virtual Machine Group option disabled for my task?**

The group capability is supported only for POWEROFF, POWERON, SHUTDOWN, and SUSPEND. The **Virtual Machine Group** option is disabled for tasks that do not support it.

**Why doesn't my DELETE job work?**

A DELETE operation requires `VMWARE_DELETE_VIRTUAL_MACHINE_ENABLED=True` in the connector configuration. Refer to [Configuration](configuration.md).

**My INFORMATION/GETPOWEREDOFFLIST report is empty on first run — why?**

The connector sets the initial powered-off date the first time it detects a machine in a powered-off state. On the first run, no machine has yet been recorded long enough to exceed your threshold, so the list is empty. Subsequent runs populate the list once the threshold is reached.

## Glossary

| Term | Definition |
|---|---|
| VMWare Connector | An OpCon connector that submits job requests to VMWare web services from an OpCon schedule. |
| Solution Manager | The browser-based interface for OpCon. Hosts the VMWare job type through the ACS framework. |
| virtual machine | A VMWare instance managed through vCenter or ESXi. The connector performs operations against virtual machines. |
| datacenter | The vSphere datacenter that contains the virtual machines. Required for the CLONE operation. |
| snapshot | A point-in-time capture of a virtual machine's state. The SNAPSHOT operation can create, remove, or revert snapshots. |
