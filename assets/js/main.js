var app = new Vue(
  {
    el: '#root',
    data:{
      toDoList: [
        {
          testo: 'comprare il pane',
          done: false,
        },
        {
          testo: 'comprare il latte',
          done: false,
        },
      ],
      toDoCompleted: [],
    },

    beforeUpdate(){
      this.toDoList.forEach( (elem, index)=>{
        if(elem.done == true){
          this.toDoCompleted.push(elem);
          this.toDoList.splice(index, 1);
        }
      } );
    },

    methods: {
      rimuoviElem(index){
        this.toDoList.splice(index, 1);
      },
      taskDone(index, elem){
        if(elem.done == false){
          elem.done = true;
        } else {
          elem.done = false;
        }
      },

      rimuoviElemCompleted(index){
        this.toDoCompleted.splice(index, 1);
      },
      taskDone(index, elem){
        if(elem.done == false){
          elem.done = true;
        } else {
          elem.done = false;
        }
      },

      aggiungiTask(){
        this.toDoList.push({
          testo : this.addText,
          done : false
          }
        );
      }
    }
  });