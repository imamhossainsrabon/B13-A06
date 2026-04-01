import check from '../assets/check.png'

const Pricing = () => {
  return (
        <div className='pricing-section'>
                <h2 className='mb-4 text-[#101727] text-[32px] md:text-[48px] leading-[120%] font-extrabold text-center'>Get Started in 3 Steps</h2>
                <p className='mb-10 text-[#627382] md:text-[16px] text-[12px] leading-[140%] text-center '>Start using premium digital tools in minutes, not hours.</p>
                <div className='page-width'>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                        <div className='pricing-card-1'>
                            <div>
                            <h3>Starter</h3>
                            <p>Perfect for getting started</p>
                            <h4><span>$0</span>/month</h4>
                            <ul className='features'>
                                <li><i class="fa-solid fa-check"></i> Access to 10 free tools</li>
                                <li><i class="fa-solid fa-check"></i> Basic templates</li>
                                <li><i class="fa-solid fa-check"></i> Community support</li>
                                <li><i class="fa-solid fa-check"></i> 1 project per month</li>
                            </ul>
                            </div>
                            <button className='pricing-btn-1'>Get Started Free</button>
                        </div>
                        <div className='pricing-card-2'>
                            <h3>Pro</h3>
                            <p>Best for professionals</p>
                            <h4><span>$29</span>/month</h4>
                            <ul className='features'>
                                <li><i class="fa-solid fa-check"></i> Access to all premium tools</li>
                                <li><i class="fa-solid fa-check"></i> Unlimited templates</li>
                                <li><i class="fa-solid fa-check"></i> Priority support</li>
                                <li><i class="fa-solid fa-check"></i> Unlimited projects</li>
                                <li><i class="fa-solid fa-check"></i> Cloud sync</li>
                                <li><i class="fa-solid fa-check"></i> Advanced analytics</li>
                            </ul>
                            <button className='pricing-btn-2'><span>Start Pro Trial</span></button>
                        </div>
                        <div className='pricing-card-1'>
                            <h3>Enterprise</h3>
                            <p>For teams and businesses</p>
                            <h4><span>$99</span>/month</h4>
                            <ul className='features'>
                                <li><i class="fa-solid fa-check"></i> Everything in Pro</li>
                                <li><i class="fa-solid fa-check"></i> Team collaboration</li>
                                <li><i class="fa-solid fa-check"></i> Custom integrations</li>
                                <li><i class="fa-solid fa-check"></i> Dedicated support</li>
                                <li><i class="fa-solid fa-check"></i> SLA guarantee</li>
                                <li><i class="fa-solid fa-check"></i> Custom branding</li>
                            </ul>
                            <button className='pricing-btn-1'>Contact Sales</button>
                        </div>
                    </div>
                </div>
        </div>
  );
};

export default Pricing;
