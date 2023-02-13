import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
            </Head>
            <div className="bg-gray-200 p-8 text-gray-700">
                <h1 className="text-3xl font-bold">About Us Page</h1>
                <p className="mt-4 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut rutrum justo, vitae laoreet turpis. Curabitur eget neque sodales, posuere nisl vitae, iaculis nisl. Maecenas feugiat justo eget volutpat viverra. Suspendisse sed imperdiet lacus. Phasellus ut pellentesque odio. Praesent at varius ligula. Pellentesque pellentesque nisl dui, quis auctor mi euismod non.
                </p>
            </div>
        </>  
    );
}
 
export default About;