const getEvents = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM events ORDER BY id ASC', (error, events) => {
        if (error) {
          reject(error)
        }
        resolve(events.rows);
      })
    }) 
  }
  const createEvents = (body) => {
    return new Promise(function(resolve, reject) {
      const { title, location, time, eventdescription,category } = body
      pool.query('INSERT INTO events (title, location, time, eventdescription,category) VALUES ($1, $2) RETURNING *', [title, location, eventdescription, category], (error, events) => {
        if (error) {
          reject(error)
        }
        resolve(`A new event has been added : ${events.rows[0]}`)
      })
    })
  }
  const deleteEvents = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM events WHERE id = $1', [id], (error, events) => {
        if (error) {
          reject(error)
        }
        resolve(`User deleted event with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getEvents,
    createEvents,
    deleteEvents,
  }
  