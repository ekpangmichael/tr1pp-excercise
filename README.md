# Dependencies
- Redis
- mongodb
- Rabbitmq

## How to get api token

- use the endpoint `api/v1/token` to get your api token and pass it in the header when sending a message


###  endpoints `/api/v1/`

| method | route             | description                  | data                                                    |
| ------ | ------------------|------------------------------|---------------------------------------------------------|
| POST   | /token            | Get api token                |  `{email}`                                              |
| POST   | /message          | Send message                 | `{message, task_id, contact_list}`                      |
