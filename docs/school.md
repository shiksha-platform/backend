School
===

### Schema Definition 

|**#**|**Field**|**Description**|**Type**|**Mandatory**|**Source Type**|**Source overview**|**Comments**|
|---------|---------|--------|--------|--------|--------|--------|---------------|
|1|schoolId|School ID as defined by the state registry|str|Yes|Auto generated|-||
|2|refschoolId|School ID as defined by a secondary state database of schools|str|No|Registry|Brownfield school registry|Existing state masterlists such as Manav Sampada in UP|
|3|regulatorName|Entity responsible for management of the school|char|Yes|Master Codes|School management codes|Typically Department of Education or KV, JNV, KGBV|
|4|name|Name of the school|char|Yes|Filled|-||
|5|schoolCategory|Category of the school as defined by the regulator|char|Yes|Master Codes|School category codes||
|6|locationType|Rural / urban location|char|Yes|Master Codes|Rural Urban Codes||
|7|districtId|District ID as defined in the state location directory|str|No|Master Codes|Location codes||
|8|blockId|Block ID as defined in the state location directory|str|No|Master Codes|Location codes||
|9|clusterId|Cluster ID as defined in the state location directory|str|No|Master Codes|Location codes||
|10|villageId|Village ID as defined in the state location directory|str|No|Master Codes|Location codes||
|11|pincode|Pincodes as defined in the state location directory|str|Yes|Master Codes|Location codes||
|12|assemblyConst|Assembly constituency the school is located in|char|No|Master Codes|Constituency codes||
|13|parlConst|Parliamentary constituency the school is located in |char|No|Master Codes|Constituency codes||
|14|gpsPoints|GPS coordinates of the school|latlong|No|Filled|-||
|15|startYear|Year in which the school was setup|date|Yes|Filled|-||
|16|teacherId|ID of the teacher playing the role of the school head teacher / principal|str|Yes|Registry|Teacher registry||
|17|instMedium|Medium of instruction followed in the school|char|Yes|Master Codes|Instruction codes||
|18|upgradeYear|Year in which the school has been upgraded in terms of it's category|date|No|Filled|-||
|19|resIdenceType|Residential or non residential type of school|char|No|Master Codes|Type of residence codes||
|20|shiftId|School runs in the morning or evening shift|char|No|Master Codes|Shift codes||
|21|sessionId|Academic calendar followed by the school (summer/ winter closing)|char|No|Master Codes|Session codes||
|22|status|Status of the school in terms of functioning (active/ closed/ merged)|char|No|Master Codes|Status codes||

