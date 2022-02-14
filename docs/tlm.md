TLM
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|tlmid|Unique of the TLM|str|Yes|Auto generated|-||
|2|name|Name of the TLM|char|Yes|Filled|-||
|3|description|Description of the TLM|char|No|Filled|-||
|4|frameworkId|Framework ID associated with the TLM|int|Yes|Foreign Key|-||
|5|tags|Array of combination of category ids and term ids applicable to the TLM|str|Yes|Foreign Key|-||
|6|sanctionedqty|No. of TLMs that the school is supposed to have as defined by the Dept|int|Yes|Filled|-||
