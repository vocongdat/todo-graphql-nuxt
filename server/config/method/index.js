import Province from '../../app/model/Provinces.js';
import District from '../../app/model/Districts.js';
import Ward from '../../app/model/Wards.js';
import Profile from '../../app/model/Profile.js';
import Todo from '../../app/model/Todo.js';

const mongoDataMethods = {
    // GET
    getAllProvinces: async () => await Province.find(),
    getProvinceByCode: async (code) => await Province.find({ code }),

    getAllDistricts: async () => await District.find(),
    getDistrictByCode: async (province_code) =>
        await District.find({ province_code }),

    getOneDistrict: async (code) => await District.findOne({ code }),

    getAllWards: async () => await Ward.find(),
    getWardByCode: async (district_code) => await Ward.find({ district_code }),

    getAllProfile: async () => await Profile.find(),
    getProfileById: async (id) => await Profile.findById(id),

    getTodosByUser: async (id) => {
        const todoAll = await Todo.find();
        const todoList = todoAll.filter((todo) => {
            if (todo.team.includes(id)) {
                return todo;
            }
        });
        return todoList;
    },

    getTodosByProject: async (projectId) => await Todo.find({ projectId }),

    // POST
    // Profile
    createProfile: async (args) => {
        const newProfile = new Profile(args);
        return await newProfile.save();
    },
    editProfile: async (args) => {
        await Profile.findByIdAndUpdate(args.id, args);
        return Profile(args);
    },
    deleteProfile: async (id) => await Profile.findByIdAndDelete(id),

    // Todo
    createTodo: async (args) => {
        const newTodo = new Todo(args);
        return await newTodo.save();
    },
    editTodo: async (args) => {
        await Todo.findByIdAndUpdate(args.id, args);
        return Todo(args);
    },
};

export default mongoDataMethods;
