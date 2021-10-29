class Tickets {
    static get = () => {
      let data;
      try {
        data = JSON.parse(localStorage.getItem('data')) || []
      } catch (e) {
        data = [];
      }
      return data;
    }
  
    static save = (eventId, data) => {
      localStorage.setItem('data', JSON.stringify(data))
    }
  }
  
  export default Tickets;
  