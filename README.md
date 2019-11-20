# Dependencies
- Redis
- mongodb
- Rabbitmq

## How to get a token

- use the endpoint `api/v1/token` passing your email


###  endpoints `/api/v1/`

| method | route             | description                  | data                                                    |
| ------ | ------------------|------------------------------|---------------------------------------------------------|
| POST   | /token            | Get api token                |  `{email}`                                              |
| POST   | /message          | Send message                 | `{message, task_id, contact_list}`                      |