let registers = []; // temporary database / store

class Register {
    constructor() {
        this.name = 'name'
    }; // only add params idf you intend to initialize with data
    static  fetchRegisters() {
        return registers.length ? registers: 'No users have registered';
    };
    static addRegister (register) {
        return registers.push(register);
    }
    static getSingleRegister(id) {
        let register;
        
       if (registers.length) {
          register = registers.find(register => register.pk == id);
        }

       if(Object.keys(register).length) {
           return {register}
       }
       return {message: 'register not found'};
       
    }

    static updateRegister(id, data) {
        let register;
        if (registers.length) {
            
        } else {
            return {message: "No registration to update"}
        }
        if(register) {
            let updatedRegister = {...register, message: data}
            let position = registers.findIndex(register =>register.pk == id);
            registers[position] = updatedRegister;
            return {register : registers[position]}
        } else {
            return {message: 'register not found'}
        }
    }

    static removeRegister(id) {
        let register;
        if (registers.length) {
            register = registers.find(register => register.pk == id);
            if(!register) {
                return {message: 'register does not exist'}
            } else {
            registers = registers.filter(register => register.pk !== id);
            return {message: 'Register removed successfully'}
            }
        } else {
            return { message: "No register to delete"}
        }
    }
};


module.exports = {
    Register,
    registers
}