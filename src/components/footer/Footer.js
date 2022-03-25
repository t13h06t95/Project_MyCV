import React from 'react'

export default function Footer() {
    return (
        <div className="pt-4 pb-4" style={{backgroundColor:"#cccab5"}}>
            <div className="footer_content col-lg-12 text-center">
                <h4>Thank you for watching </h4>
            </div>
            <div className="footer_contact col-lg-12 mt-3">
                <div className="contact_header">
                    <h4>My contact</h4>
                </div>
                <div className="contact_content row">
                    <div className="content_information col-lg-6 mt-2">
                        <h6 className="mb-3">Information: </h6>
                        <p className="mb-2">Name: Trinh Hoang Tam</p>
                        <p className="mb-2">Dob: 13/06/1995</p>
                        <p className="mb-2">Address: 124/17 Trung My Tay Ward, District 12, Ho Chi Minh City</p>
                        <p className="mb-2">Phone: 0707949878</p>
                    </div>
                    <div className="content_social col-lg-6 mt-2">
                    <h6 className="mb-3">Social Network: </h6>
                        <p className="mb-2">Facebook:<a href="https://www.facebook.com/profile.php?id=100079543542097"> t13h06t95</a></p>
                        <p className="mb-2">Twitter:<a href="https://twitter.com/t13h06t95"> t13h06t95</a></p>
                        <p className="mb-2">Github: <a href="https://github.com/t13h06t95">t13h06t95</a></p>
                        <p className="mb-2">Gmail: <a href="mailto:t13h06t95@gmail.com">t13h06t95@gmail.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
