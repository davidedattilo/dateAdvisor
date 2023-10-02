import Header from '@components/organism/Header';
import StaticHead from '@components/organism/StaticHead';
import { getProfileDatabyId } from '@utils/utility';
import React from 'react';
import DatePage from './DatePage';
import ProfilePage from './ProfilePage';
import SearchPage from './SearchPage';

export async function getServerSideProps(context) {
    //const res = await fetch('https://.../posts')
    //const posts = await res.json()

    // By returning { props: { profileData } }, the Profile data for the page
    // will receive `profileData` as a prop at build time
    return {
        props: {
            pageData: {
                page_info: {
                    title: "Date Advisor",
                    description: "",
                }
            },
            currentUrl: context.req.headers.host + context.resolvedUrl,
            profileData: getProfileDatabyId(244000)
        },
    }
}

export default function Base(props) {
    let data = props.pageData;
    const structuredData = props.structuredData;
    return (
        <>
            <StaticHead>
                <title>{data.page_info.title}</title>
                <meta content={data.page_info.description} name="description" />
                <link
                    rel="icon"
                    href="https://cdn-icons-png.flaticon.com/512/1999/1999360.png"
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
            </StaticHead>
            {/*<Header {...props} />*/}
            <main>
                <DatePage {...props} />
                <ProfilePage {...props} />
                <SearchPage {...props} />
            </main>
            {/*<Footer {...props} />*/}
        </>
    );
}
