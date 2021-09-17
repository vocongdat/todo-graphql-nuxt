import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Province {
        id: ID!
        name: String
        code: Int
        division_type: String
        codename: String
        phone_code: Int
        districts: [District]
        district(code: Int!): District
    }

    type District {
        id: ID!
        name: String
        code: Int
        division_type: String
        codename: String
        province_code: Int
        wards: [Ward]
    }

    type Ward {
        id: ID!
        name: String
        code: Int
        division_type: String
        codename: String
        district_code: Int
    }

    type Profile {
        id: ID!
        name: String
        avatar: String
        phoneNumber: String
        province: String
        district: String
        ward: String
        todos(id: ID!): [Todo]
    }

    type Todo {
        id: ID!
        title: String
        content: [String]
        team: [ID]
        status: String
        projectId: String
    }

    # ROOT TYPE
    type Query {
        provinces: [Province]
        province(code: Int!): [Province]

        districts: [District]
        district(province_code: Int!): [District]

        wards: [Ward]
        ward(district_code: Int!): [Ward]

        profiles: [Profile]
        profile(id: ID!): Profile

        todos(id: ID!): [Todo]

        todoByProject(projectId: ID!): [Todo]
    }
    type Mutation {
        # Profile
        createProfile(
            name: String
            avatar: String
            phoneNumber: String
            province: String
            district: String
            ward: String
        ): Profile

        editProfile(
            id: ID!
            name: String
            avatar: String
            phoneNumber: String
            province: String
            district: String
            ward: String
        ): Profile
        deleteProfile(id: ID!): Profile

        # Todo
        createTodo(
            title: String
            content: [String]
            team: [String]
            status: String
            projectID: String
        ): Todo

        editTodo(
            id: ID!
            title: String
            content: [String]
            team: [String]
            status: String
            projectID: String
        ): Todo
    }
`;

export default typeDefs;
