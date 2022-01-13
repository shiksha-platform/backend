School visit infra
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|id|Unique ID of the spot assessment conducted for a class during a school visit|str|Yes|Auto generated|-||
|2|schoolvisitid|Unique ID of the record of a particular school visit done by a mentor/ monitor|str|Yes|Foreign Key|-||
|3|infraid|Unique ID of the infrastructure |str|Yes|Foreign Key|-||
|4|infrapresent|Presence of the infra in case it's <2 in number (yes/ no)|int|Yes|Filled|-||
|5|infranumber|No. of infra available in the school in case it's >1 in number |int|Yes|Filled|-||
|6|infrarepair|No. of infra that require repair|int|Yes|Filled|-||
