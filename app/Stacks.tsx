import StackItem from "./StackItem";

interface Props {
  stacks: Stack[];
}
const Stacks = ({ stacks }: Props) => {
  return (
    <div className="flex items-center space-x-4">
      {stacks.map((stack, index) => (
        <StackItem key={index} stack={stack} />
      ))}
    </div>
  );
};

export default Stacks;
