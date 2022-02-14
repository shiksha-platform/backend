Blueprint
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|blueprintId|Unique ID of the blueprint|str|Yes|Auto generated|-||
|2|name|Name of the blueprint|char|Yes|Filled|-||
|3|description|Description of the blueprint|char|No|Filled|-||
|4|frameworkId|Framework ID associated with the content object|str|Yes|Foreign Key|-||
|5|tags|Array of combination of category ids and term ids applicable to the content object|str|Yes|Foreign Key|-||
|6|assessmentId|Array of assessment ids mapped to this blueprint|str|No|Foreign Key|-||
