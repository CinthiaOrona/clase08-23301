//import styles from '@/styles/Video.module.css'

export default function Video() {
    return (

        <div className="mx-auto">
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
