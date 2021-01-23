import { v4 as uuidv4 } from 'uuid';
const dataRed = (state = [
    {
        name: "Bilal Hussain",
        cms: "208409",
        github: "https://github.com/BilalHussain009",
        img: "https://bilalhussain.live/kek.png",
        bio: "Hi, my name is Bilal Hussain.I'm a Full Stack Web Developer with expertise in React & Node.js",
        id: uuidv4()
    }
], action) => {
    switch (action.type) {
        case 'GETALLDATA':
            return state;
        case "GETONEDATA":
            return state.find((e) => {
                return e.id == action.id
            })
        case "UPDATEDATA":
            const newState = state.map((el) => {
                if (el.id == action.id) {
                    el.name = action.data.name
                    el.cms = action.data.cms
                    el.github = action.data.github
                    el.bio = action.data.bio
                    return el
                }
                else {
                    return el

                }
            })
            return newState
        case "DELETE":
            return state.filter((el) => {
                if (el.id == action.id) {
                    return false
                }
                else {
                    return true
                }
            })
        case "ADDNEW":
            return [...state,action.data]
        default:
            return state;
    }
};
export default dataRed