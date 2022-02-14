Framework
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|frameworkId|Unique ID for framework/ taxonomy defined by a particular state|int|Yes|Auto generated|-||
|2|name|Name of the framework|str|Yes|Filled|-||
|3|description|Description of the framework|str|Yes|Filled|-||
|4|status|Status of the framework (live, inactive) etc.|str|Yes|Master Code|Status Codes||
|5|categoryId|Array of IDs of the categories to be included the framework|str|Yes|Foreign Key|-||
|6|termId|Array of IDs of terms mapped to the relevant catgegories to be included in the framework|str|Yes|Foreign Key|-||
