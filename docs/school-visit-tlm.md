School visit tlm
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|id|Unique ID of the spot assessment conducted for a class during a school visit|str|Yes|Auto generated|-||
|2|schoolvisitid|Unique ID of the record of a particular school visit done by a mentor/ monitor|str|Yes|Foreign Key|-||
|3|tlmspresent|No. of TLMs that are present in the school |int|Yes|Filled|-||
|4|tlmsused|No. of TLMs that are used for teaching in the school|int|No|Filled|-||
