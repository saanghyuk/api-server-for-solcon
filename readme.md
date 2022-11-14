# AB180 Members API 



HOST : https://ab180-members-api-server.herokuapp.com/

| No. | Http Method | URL                | Function            |
|----------- | ----------- | ------------------ | ------------------- |
|1| GET         | /api/members       | Get all members     |
|2| GET         | /api/members/`:id` | Get information of  `:id` member |
|3| POST        | /api/members       | Add new member(s)   |
|4| PUT | /api/members/`:id` | Change information of the `:id` member |
|5| Delete | /api/members/`:id` | Delete Information of the `:id` member |
|6| | | |



## Example

### No. 1

```json
GET http://localhost:3000/api/members
```



### No. 2 

```json
GET http://localhost:3000/api/members/3
```



### No. 3

All objects should be in the `[]`

```Json
POST https://ab180-members-api-server.herokuapp.com/api/members
Content-Type:application/json

[
  { 
    "id": 15,
  "name": "Sojeen Park", 
  "team": "Customer Success", 
  "position": "Team Lead", 
  "emailAddress": "sojeen@ab180.co", 
  "phoneNumber": "010-1234-5678"
  }
]

```

```json
POST https://ab180-members-api-server.herokuapp.com/api/members
Content-Type:application/json

[
  { 
  "name": "Sojeen Park", 
  "team": "Customer Success", 
  "position": "Team Lead", 
  "emailAddress": "sojeen@ab180.co", 
  "phoneNumber": "010-1234-5678"
  },
  { 
  "name": "Sojeen Park", 
  "team": "Customer Success", 
  "position": "Team Lead", 
  "emailAddress": "sojeen@ab180.co", 
  "phoneNumber": "010-1234-5678"
  }
]


```



### No. 4 

```json
PUT https://ab180-members-api-server.herokuapp.com/api/members/14
Content-Type:application/json

{
"name": "Erica Park"
}

```





### No. 5

```json
DELETE https://ab180-members-api-server.herokuapp.com/api/members/14
```

