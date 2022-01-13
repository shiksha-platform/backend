Collection
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|Unique id of this collection|int|Yes|Auto generated|-||
|2|name|Name of the collection|str|Yes|Filled|-||
|3|description|Description of the collection|str|Yes|Filled|-||
|4|frameworkId|Framework ID associated with the collection|int|Yes|Foreign Key|-||
|5|tags|Array of combination of category ids and term ids applicable to the collection|str[]|Yes|Foreign Key|-||
|6|contentId|Array of content object IDs of the content objects mapped to this collection|int[]|Yes|Foreign Key|-||
|7|createdBy|ID of the user uploading the content|int|Yes|Autofilled|-||
|8|audience |Audience that the content is targetting (student, teacher)|str|Yes|Master Codes|Audience Codes||
|9|status|Draft/ live/ inactive as the status of the collection|str|Yes|Master Codes|Status Codes||
|10|createdOn|Date on which the collection has been created|date|Yes|Autofilled|-||
|11|lastUpdatedOn|Date on which the collection has been updated|date|Yes|Autofilled|-||
