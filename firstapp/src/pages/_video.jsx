import { datosVideos } from '../datos.js'

export default function Video() {
    return (
        <div className="mx-auto">
            {/*desde datos.js*/}
            {datosVideos.map((video, index) => {
                return (
                    <div key={index}>
                        <video
                            src={video}
                            width={500}
                            height={300}
                            frameBorder={0}
                            controls
                        >
                        </video>
                    </div>
                )
            })}
            {/*directo*/}
            <video
                src="https://mdbootstrap.com/img/video/animation-intro.mp4"
                width={500}
                height={300}
                frameBorder={0}
                controls
            >
            </video>
        </div>

    )
}
