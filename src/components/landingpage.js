import React from 'react'
import '../page.css'
import logo1 from "./assets/unsplash_87gLIFoj79c.png"
import logo2 from "./assets/unsplash_ZHvM3XIOHoE.png"
import logo3 from "./assets/Mask group.png"
import logo4 from "./assets/unsplash_iEEBWgY_6lA.png"
import logo5 from "./assets/unsplash_fHXpgMd_XhE.png"
import logo6 from "./assets/unsplash_-2vD8lIhdnw.png"
import { Link } from 'react-router-dom'
import Login from './login'
function LandingPage() {

  
  return (
    <div className="gap">
      <nav className="NewFrame2">
        <div className="NewChatter">CHATTER</div>
        <div className="NewFrame43357">
          <div className="NewFrame1">
            <Link to='/' className="NewHome">Home</Link>
            <div className="NewAboutUs">About us</div>
            <div className="NewContact">Contact</div>
            <div className="NewBlogs">Blogs</div>
          </div>
          <div   className="NewFrame5">
            <Link to= '/login' className="NewFrame3">
              <div className="NewLogIn">Log in</div>
            </Link>
          </div>
          <div className="NewFrame4">
            <Link to= '/signup' className="NewSignUp">  Sign up</Link>
          </div>
        </div>
      </nav>

      <div className="Frame14">
        <img className="bgphoto" src={logo6}></img>
        <div className="Frame6">
          <div className="Frame13">
            <div className="Frame12">
              <div className="WelcomeToChatterAHavenForTextBasedContent">
                Welcome to Chatter: A Haven for Text-Based Content
              </div>
              <div className="UnleashThePowerOfWordsConnectWithLikeMindedReadersAndWriters">
                Unleash the Power of Words, Connect with Like-minded Readers and
                Writers
              </div>
            </div>
            <div className="Frame5">
              <div className="GetStarted">Get started</div>
            </div>
          </div>
        </div>
      </div>

      {/* third table */}
      <div className="gap1">
        <div className="Frame15">
          <div className="Frame11">
            <div className="Frame10">
              <div className="AboutChatter">About Chatter</div>
              <div className="ChatterDescription">
                Chatter is a multi-functional platform where authors and readers
                can have access to their own content. It aims to be a
                traditional bookworm’s heaven and a blog to get access to more
                text-based content. Our vision is to foster an inclusive and
                vibrant community where diversity is celebrated. We encourage
                open-mindedness and respect for all individuals, regardless of
                their backgrounds or beliefs. By promoting dialogue and
                understanding, we strive
              </div>
            </div>
          </div>
          <img className="Unsplash87glifoj79c" src={logo1} />
        </div>

        {/* fouth taable */}
        <div className="Wrapper">
          <div className="Container">
            <div className="Title">Why you should join chatter</div>
            <div className="Description">
              Our goal is to make writers and readers see our platform as their
              next heaven for blogging, ensuring ease in interactions,
              connecting with like-minded peers, have access to favorite content
              based on interests and able to communicate your great ideas with
              people
            </div>
          </div>
          <div className="Features">
            <div className="Feature">
              <div className="IconContainer">
                <div className="Icon CarbonAnalytics">
                  <div className="Vector"></div>
                  <div className="Vector"></div>
                </div>
              </div>
              <div className="FeatureTitle">Analytics</div>
              <div className="FeatureDescription">
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </div>
            </div>
            <div className="Feature">
              <div className="IconContainer">
                <div className="Icon FluentPeopleCommunity32Filled">
                  <div className="Vector"></div>
                </div>
              </div>
              <div className="FeatureTitle">Social interactions</div>
              <div className="FeatureDescription">
                Users on the platform can interact with posts they like, comment
                and engage in discussions
              </div>
            </div>
            <div className="Feature">
              <div className="IconContainer">
                <div className="Icon"></div>
              </div>
              <div className="FeatureTitle">Content creation</div>
              <div className="FeatureDescription">
                Write nice and appealing with our in-built markdown, a rich text
                editor
              </div>
            </div>
          </div>
        </div>

        {/* fifth table */}

        <div class="Container">
          <div class="Content">
            <div class="Text">
              <p class="Quote">
                "Chatter has become an integral part of my online experience. As
                a user of this incredible blogging platform, I have discovered a
                vibrant community of individuals who are passionate about
                sharing their ideas and engaging in thoughtful discussions.”
              </p>
              <p class="Author">
                Adebobola Muhydeen, Software developer at Apple
              </p>
            </div>
            <button class="JoinButton">Join chatter</button>
          </div>
          <div class="BackgroundShape"></div>
          <img class="Image" src={logo2} alt="Placeholder Image"></img>
        </div>

        {/* sixth table */}

        <div className="NewFrame41">
          <div className="NewFrame39">
            <div className="NewFrame38">
              <div className="NewMaskGroup">
                <div className="NewEllipse2" />
                <img className="NewUnsplashJzz3jwmzha" src={logo3} />
              </div>
              <div className="NewMaskGroup">
                <div className="NewEllipse4" />
                <img className="NewUnsplashIeebwgy6la" src={logo4} />
              </div>
            </div>
            <div className="NewMaskGroup">
              <div className="NewEllipse5" />
              <img className="NewUnsplashFhxpgmdXhe" src={logo5} />
            </div>
          </div>
          <div className="NewFrame24">
            <div className="NewFrame23">
              <div className="NewWriteReadAndConnectWithGreatMindsOnChatter">
                Write, read and connect with great minds on chatter
              </div>
              <div className="NewSharePeopleYourGreatIdeasAndAlsoReadWriteUpsBasedOnYourInterestsConnectWithPeopleOfSameInterestsAndGoals">
                Share people your great ideas, and also read write-ups based on
                your interests. connect with people of same interests and goals
              </div>
            </div>
            <div className="NewFrame5">
              <div className="NewGetStarted">Get started</div>
            </div>
          </div>
        </div>
        {/* seventh table  */}

        <div className="Frame25">
          <div className="Chatter">CHATTER</div>
          
          <div className="flex1">
            <div className="Explore">Explore</div>
            <div className="Support">Support</div>
            <div className="Community">community</div>
            <div className="TrendingBlogs">Trending blogs</div>
          <div className="OfficialBlog">Official blog</div>
          </div>
         <div className='flex2'>
          <div className="SupportDocs">Support docs</div>
          <div className="Contact">Contact</div>
          <div className="JoinSlack">Join slack</div>
          </div> 
          <div className='flex3'>
          <div className="OfficialBlog">Official blog</div>
          <div className="EngineeringBlog">Engineering blog</div>
          <div className="ChatterForTeams">Chatter for teams</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage