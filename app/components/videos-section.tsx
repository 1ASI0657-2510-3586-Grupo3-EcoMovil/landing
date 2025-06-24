import {Badge} from "@/app/components/ui/badge";

export function VideosSection(){
    return(
        <section id="videos" className="md:grid md:grid-cols-1 md:gap-8 bg-green-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Video</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">About the team</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get to know the team behind the project. We are passionate about creating a better experience for our users.
                    </p>
                    <div className="flex justify-center">
                        <iframe
                            width="100%"
                            height="315"
                            className="max-w-2xl w-full rounded-xl shadow-lg"
                            src="https://www.youtube.com/embed/videoID"
                            title="About the team"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Video</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-800">About the Product</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Learn more about the product and how it can help you. We are committed to providing the best service possible.
                    </p>
                    <div className="flex justify-center">
                        <iframe
                            width="100%"
                            height="315"
                            className="max-w-2xl w-full rounded-xl shadow-lg"
                            src="https://www.youtube.com/embed/videoI"
                            title="About the team"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}