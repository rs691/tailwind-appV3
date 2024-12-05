import '../css/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to my portfolio</h1>
        <p className="hero-text">Im a software engineer</p>
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Hello<span className="text-violet-400 dark:text-violet-600">laborum doloribus</span> delectus
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
		<div className="flex flex-wrap justify-center">
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Get started</button>
			<button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 dark:text-gray-900 border-gray-700 dark:border-gray-300">Learn more</button>
		</div>
	</div>
      </div>
    </div>
  );
}

export default Hero;