interface Props {
  resume: Resume[];
}
const AboutMe = ({ resume }: Props) => {
  const resumeLength = resume.length;
  return (
    <section id="about" className="p-5 sm:p-10">
      <div className="w-20 sm:w-40 h-1 bg-gradient-to-r from-rose-500 to-violet-500 rounded-full" />
      <h1 className="text-gradient py-10">Über Mich</h1>
      <p className="text-lg font-light w-96">
        Der Zweck von{" "}
        <span className="text-gradient text-lg">Code mit Paul</span> ist es,
        aufstrebenden und bereits etablierten Entwicklern zu helfen, ihre
        Kenntnisse auf die nächste Stufe zu heben und großartige Anwendungen zu
        erstellen.
      </p>
      <div className="flex items-center space-x-20 pt-20 overflow-x-scroll scrollbar-hide">
        {resume.map((res, index) => (
          <div
            key={res._id}
            className="w-52 flex flex-col relative flex-shrink-0"
          >
            {index < resumeLength - 1 && (
              <span className="absolute h-1 bg-gradient-to-r from-violet-500 to-transparent top-0 right-0 w-20"></span>
            )}

            <h3 className="font-extrabold text-gray-600 dark:text-gray-400">
              {res.year}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 pt-5 font-light italic text-xs w-32">
              {res.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
