import { FC, type ReactNode } from "react";

type CourseGoalProps = {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void; 
};

// FC stands for Functional Component
// const CourseGoal: FC<CourseGoalProps>= ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };

const CourseGoal = ({ title,id,  children, onDelete }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => {onDelete(id)}}>Delete</button>
    </article>
  );
};

export default CourseGoal;
