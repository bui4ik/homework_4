const EventEmitter = (function () {
   class EventEmitter {
       constructor() {
           this.callbackStore = {};
       }

       on(eventName, callback) {
           this.callbackStore[eventName] = this.callbackStore[eventName] || [];
           this.callbackStore[eventName].push(callback);
           return this;
       }

       emit(eventName, ...params) {
           if (!this.callbackStore[eventName]) {
               return;
           }
           this.callbackStore[eventName].forEach(callback => {
               callback(...params);
           })
       }
   }

   return EventEmitter;
})();
