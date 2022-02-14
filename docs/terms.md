Terms
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|termId|Unique ID of the term in a category|int|Yes|Auto generated|-||
|2|name|Name of the term|str|Yes|Filled|-||
|3|description|Description of the term|str|Yes|Filled|-||
|4|status|Status of the term (live, inactive)|str|Yes|Filled|-||
|5|categoryId|Unique ID of the category that term is mapped to|int|Yes|Foreign Key|-||
|6|parenttermId|Array of IDs of the terms that have a parent relationship with this term|int|Yes|Foreign Key|-||
