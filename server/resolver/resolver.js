const resolvers = {
    // Query
    Query: {
        provinces: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllProvinces(),
        province: async (parent, { code }, { mongoDataMethods }) =>
            await mongoDataMethods.getProvinceByCode(code),

        districts: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllDistricts(),
        district: async (parent, { province_code }, { mongoDataMethods }) =>
            await mongoDataMethods.getDistrictByCode(province_code),

        wards: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllWards(),
        ward: async (parent, { district_code }, { mongoDataMethods }) =>
            await mongoDataMethods.getWardByCode(district_code),

        profiles: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllProfile(args),
        profile: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getProfileById(id),

        todos: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getTodosByUser(id),

        todoByProject: async (parent, { projectId }, { mongoDataMethods }) =>
            await mongoDataMethods.getTodosByProject(projectId),
    },

    Province: {
        districts: async ({ code }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getDistrictByCode(code),
        district: async (parent, { code }, { mongoDataMethods }) =>
            await mongoDataMethods.getOneDistrict(code),
    },

    District: {
        wards: async ({ code }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getWardByCode(code),
    },

    Todo: {
        team: async ({ team }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getProfileByListId(team),
    },

    // Todo: {
    //     todos: async ({ id }, args, { mongoDataMethods }) =>
    //         await mongoDataMethods.getTodosByUser(id),
    // },

    // MUTATION
    Mutation: {
        // Profile
        createProfile: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createProfile(args),
        editProfile: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.editProfile(args),
        deleteProfile: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.deleteProfile(id),

        // Todo
        createTodo: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.createTodo(args),
        editTodo: async (parent, args, { mongoDataMethods }) =>
            await mongoDataMethods.editTodo(args),
        deleteTodo: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.deleteTodo(id),
    },
};

export default resolvers;
