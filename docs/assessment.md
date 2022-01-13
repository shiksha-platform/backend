Assessment
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|assessmentId|Unique ID of the assessment |str|Yes|Auto generated|-||
|2|type|Type of assessment such as FA, SA, SAT etc.|char|Yes|Master Codes|Assessment Type Codes||
|3|acadYear|Academic year the assessment is being conducted in|date|Yes|Master Codes|Acad Year Codes||
|4|name|Name of the assessment |char|Yes|Filled|-||
|5|description|Description of the assessment|char|No|Filled|-||
|6|classid|Unique ID of the class and section for which the assessment is applicable|char|Yes|Master Codes|Terms mapped to Grade Category||
|7|subjecttermid|Term ID mapped to the 'subject' category applicable to this assessment|char|Yes|Master Codes|Terms mapped to Subject Category||
|8|sessionId|The school session to which the assessment applies|str (termid)|No|Master Codes|Session Codes||
|9|schoolId[]|List of schools to which the state assessment applies|str|Yes|Registry|-|If term is applicable and schools mapped to terms then this will not be relevant|
