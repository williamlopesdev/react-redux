const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Categorias:",
      lessons: [
        { id: 1, title: "Action figures: " },
        { id: 2, title: "Canecas: " },
        { id: 3, title: "Relógios: " },

      ],
    },
  ],
};

export default function course(state = INITIAL_STATE, action) {
  if (action.type === "TOGGLE_LESSON") {
    return {
      // um novo state é criado e retornado
      ...state,
      activeLesson: action.lesson,
      activeModule: action.module,
    };
  }
  return state;
}
