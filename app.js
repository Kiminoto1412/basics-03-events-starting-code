const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      confirmName: "",
    };
  },
  // computed คล้าย method แต่ต่างตรงที่มันจะreexecute เมื่อของที่เกี่ยวข้องในfunctionนั้นๆเปลี่ยน แต่methodจะไม่สนมันจะreหมด
  // อย่าง fullname() จะมี name ที่dynamic ได้ เพราะฉะนั้นมันจะreexecute เฉพาะถ้า nameเปลี่ยน
  computed: {
    fullname() {
      console.log("running...");
      if (this.name === "" || this.lastName === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  watch: {
    // in watch mode, you can add property in data() as a method and
    // that will have value as a this.name that will track this dynamic value

    counter(value){
      if(value > 50){
        const that = this;
        setTimeout(function(){
          that.counter = 0
        },2000)
      }
    }
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  methods: {
    outputFullname() {},
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
