import React from 'react';
import './_bio.scss';

function Bio() {
  return (
    <div className="bio__content">
      <p className="bio__text">
        I am a developer in love with AWS Devops. As a developer, I love coding
        with TDD methodology and I enjoy coding in different languages such as
        Python, Javascript and Typescript (Nodejs) and React. I consider myself
        a full stack developer. I have worked with different devops tools and
        services such as AWS, Kubernetes, Ansible, Travis. I have passed
        multiple AWS exams in the past including AWS Certified DevOps
        Engineer(Professional), AWS Certified Solutions Architect(Associate) and
        AWS Certified Developer(Associate). My current active AWS certification
        is AWS Certified Cloud Practitioner:
        <a
          href="https://www.credly.com/badges/c4c91664-c70a-4667-b78a-8675835348cd/public_url"
          target="_blank"
          rel="noreferrer"
        >
          View my certificate
        </a>
      </p>
      <h3 className="heading-3 mb-sm">You can cantact me via linkedin</h3>
      <p className="bio__text">
        If you can not find me there for any reason please reach me at:
        hamed.minaee@yahoo.com
      </p>
      <button className="btn">My linkedin</button>
    </div>
  );
}

export default Bio;
