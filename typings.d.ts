interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

interface Stack {
  _id: string;
  title: string;
  skill: number;
  mainImage: Image;
}

interface Video {
  _id: string;
  title: string;
  description: string;
  url: string;
  mainImage: Image;
  stacks: Stack[];
}

interface SocialIcon {
  _id: string;
  name: string;
  url: string;
}

interface GeneralCategory {
  _id: string;
  title: string;
  description: string;
  color: string;
  stacks: Stack[];
}

interface Resume {
  _id: string;
  description: string;
  year: string;
}
