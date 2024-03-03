class Telephone {
    #phoneNumbers = new Set();
    #observers = new Set();
  
    constructor() {}
  
    AddPhoneNumber(phoneNumber) {
      this.#phoneNumbers.add(phoneNumber);
    }
  
    RemovePhoneNumber(phoneNumber) {
      this.#phoneNumbers.delete(phoneNumber);
    }
  
    DialPhoneNumber(phoneNumber) {
      if (this.#phoneNumbers.has(phoneNumber)) {
        this.#NotifyObservers(phoneNumber);
      } else {
        throw new Error(
          `The phone number ${phoneNumber} has not been added yet.`,
        );
      }
    }
  
    AddObserver(observer) {
      this.#observers.add(observer);
    }
  
    RemoveObserver(observer) {
      this.#observers.delete(observer);
    }
  
    #NotifyObservers(notification) {
      for (const observer of this.#observers) {
        observer.Notify(notification);
      }
    }
  }
  
  class Observer {
    #notificationHandler;
    constructor(notificationHandler) {
      this.#notificationHandler = notificationHandler;
    }
  
    Notify(notification) {
      this.#notificationHandler(notification);
    }
  }
  
  const telephone = new Telephone();
  
  telephone.AddPhoneNumber("2347143232");
  
  telephone.AddObserver(
    new Observer((phoneNumber) => {
      console.log(phoneNumber);
    }),
  );
  telephone.AddObserver(
    new Observer((phoneNumber) => {
      console.log(`Now Dialing ${phoneNumber}`);
    }),
  );
  
  telephone.DialPhoneNumber("2347023232");