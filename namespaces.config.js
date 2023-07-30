import path from "path";

const namespaces = () => {
  return {
    alias: [
      {
        find: "Assets",
        replacement: path.resolve(path.join(__dirname, "/src/Assets")),
      },
      {
        find: "Components",
        replacement: path.resolve(path.join(__dirname, "/src/Components")),
      },
      {
        find: "Functions",
        replacement: path.resolve(path.join(__dirname, "/src/Functions")),
      },
      {
        find: "Hooks",
        replacement: path.resolve(path.join(__dirname, "/src/Hooks")),
      },
      {
        find: "Theme",
        replacement: path.resolve(path.join(__dirname, "/src/Theme")),
      },
      {
        find: "Views",
        replacement: path.resolve(path.join(__dirname, "/src/Views")),
      },
    ],
  };
};

export default namespaces;
