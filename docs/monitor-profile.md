Monitor profile
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|monitorId|Unique ID given to monitors|str|Yes|Auto generated|-|Options: DEO, DEEO, BEO, DPC, APC|
|2|designation|Designation of the monitor|char|Yes|Master Codes|Designation Codes||
|3|districtId|District of the monitor|str|No|Master Codes|Location codes||
|4|blockId|Block of the monitor|str|No|Master Codes|Location codes||
|5|status|Monitor status|char|Yes|Master Codes|Status Codes||
