Session
===

### Schema Definition

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|sessionId|Unique ID for the school session |str|No|Auto generated|-|Need to understand what all is dependent on a school term|
|2|name|Name of the term (Summer closing/ winter closing)|char|No|Master Codes|-||
|3|description|Description of the school session|char|No|Filled|-||
|4|startdate|Start date of the session|date|No|filled|-|Would be used by the state apps to update content contextualized for the term|
|5|enddate|End date of the session|date|No|filled|-||
