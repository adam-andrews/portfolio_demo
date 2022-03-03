import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/adam-andrews"
				>
					<BsGithub />
				</a>
			</div>
			<div>
				<div>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.linkedin.com/in/adam-andrews-2a6a3a200/"
					>
						<BsLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SocialMedia;
