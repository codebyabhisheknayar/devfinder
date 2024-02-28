// components/UserDetails.tsx
import React from 'react';
import Image from 'next/image';

interface UserDetailsProps {
    data: any;
}
const defaultImg = 'octocat.jpg';
const UserDetails: React.FC<UserDetailsProps> = ({ data }) => {
const formattedDate = data?.created_at ? new Date(data.created_at).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }) : '--';

    return (
        <div className="wrap-card mt-4 text-gray-50">
            <div className="rounded bg-secondary p-6 lg:p-12">
                <div className="profile-info flex justify-start gap-12 items-center">
                    <div className="profile-pic border-4 rounded-full border-solid border-[#5f78a2]">
                        <Image priority
                            className="rounded-full w-24 h-24"
                            src={data?.avatar_url ? data.avatar_url : defaultImg}
                            width={150}
                            height={150}
                            alt={data?.login ? data.login : '' }
                        />

                    </div>
                    <div className="user-detail">
                        <h4 className="text-2xl mb-2">{data?.name ? data.name : '--'} </h4>
                        <a className='text-blue text-sm mb-1 block' href={data?.html_url ? data.html_url : '#'}> {data?.login ? `@${data.login}` : '--'}</a>
                        <p className='text-sm mb-2 text-slate-300'>Joined {formattedDate}</p>
                    </div>
                </div>
                <div className="description mt-3 text-slate-300">
                    <p>{data?.bio ? data.bio : '--'}</p>
                </div>
                <div className="repoinfo mt-8 rounded-lg bg-primary py-5 px-6">
                    <div className="wrap-profile-info">
                        <div className="grid grid-cols-3">
                            <div>
                                <p className="text-xs mb-1">Repos</p>
                                <h5 className="text-lg text-white font-bold">{data?.public_repos ? data.public_repos: '--'}</h5>
                            </div>
                            <div>
                                <p className="text-xs mb-1">Followers</p>
                                <h5 className="text-lg text-white font-bold">{data?.followers ? data.followers : '--'}</h5>
                            </div>
                            <div>
                                <p className="text-xs mb-1">Following</p>
                                <h5 className="text-lg text-white font-bold">{data?.following ? data.following : '--'}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-link mt-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className={data?.location ? 'flex gap-2' : 'opacity-40 flex gap-2 cursor-not-allowed'}>
                            <div>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2a8 8 0 0 1 6.6 12.6l-.1.1-.6.7-5.1 6.2a1 1 0 0 1-1.6 0L6 15.3l-.3-.4-.2-.2v-.2A8 8 0 0 1 11.8 2Zm3 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
                                </svg>

                            </div>
                            <div className="text-sm text-slate-300">{data?.location ? data.location : 'Not Available'}</div>
                        </div>
                        <div className={data?.twitter_username ? 'flex gap-2' : 'opacity-40 flex gap-2 cursor-not-allowed'}>
                            <div>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M22 5.9c-.7.3-1.5.5-2.4.6a4 4 0 0 0 1.8-2.2c-.8.5-1.6.8-2.6 1a4.1 4.1 0 0 0-6.7 1.2 4 4 0 0 0-.2 2.5 11.7 11.7 0 0 1-8.5-4.3 4 4 0 0 0 1.3 5.4c-.7 0-1.3-.2-1.9-.5a4 4 0 0 0 3.3 4 4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.9 2.8c-1.8 1.3-4 2-6.1 1.7a11.7 11.7 0 0 0 10.7 1A11.5 11.5 0 0 0 20 8.5V8a10 10 0 0 0 2-2.1Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="text-sm text-slate-300">{data?.twitter_username ? data.twitter_username : 'Not Available'}</div>
                        </div>
                        <div className={data?.blog ? 'flex gap-2' : 'opacity-40 flex gap-2 cursor-not-allowed'}>
                            <div>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.2 9.8a3.4 3.4 0 0 0-4.8 0L5 13.2A3.4 3.4 0 0 0 9.8 18l.3-.3m-.3-4.5a3.4 3.4 0 0 0 4.8 0L18 9.8A3.4 3.4 0 0 0 13.2 5l-1 1" />
                                </svg>
                            </div>
                            <div className="text-sm text-slate-300">
                                <a className='break-all hover:text-blue cursor-pointer' href={data?.blog ? data.blog : '#'}>{data?.blog ? data.blog : 'Not Available'}</a></div>
                        </div>

                        <div className={data?.company ? 'flex gap-2' : 'opacity-40 flex gap-2 cursor-not-allowed'}>
                            <div>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z" />
                                </svg>
                            </div>
                            <div className="text-sm text-slate-300">{data?.company ? data.company : 'Not Available'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default UserDetails;
