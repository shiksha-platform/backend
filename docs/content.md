Content
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|Id|Unique ID of the content object|int|Yes|Auto generated|-||
|2|name|Name of the content object|str|Yes|Filled|-||
|3|description|Description of the content object|str|Yes|Filled|-||
|4|type|Type of content such as video, worksheet, lesson plan etc.|str|Yes|Master Codes|Content Type Codes||
|5|createdBy|ID of the user uploading the content|str|Yes|Autofilled|-||
|6|audience |Audience that the content is targetting (student, teacher)|str|Yes|Master Codes|Audience Codes||
|7|frameworkId|Framework ID associated with the content object|int|Yes|Foreign Key|-||
|8|tags|Array of combination of category ids and term ids applicable to the content object|str|Yes|Foreign Key|-||
|9|status|Draft/ live/ inactive as the status of the content |str|Yes|Filled|-||
|10|mimeType|Format of the content object like PDF, .mp4, .html etc.|str|Yes|Autofilled|-||
|11|language|Language of the content object|str|Yes|Master Codes|Language Codes||
|12|publishedOn|Date on which the content object has been published|date|Yes|Autofilled|-||
|13|lastUpdatedOn|Date on which the content object has been updated|date|Yes|Autofilled|-||
|14|collectionId|ID of the content collection that this content object is a part of|int|Yes|Filled|-||
