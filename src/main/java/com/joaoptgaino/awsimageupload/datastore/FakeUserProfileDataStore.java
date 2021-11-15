package com.joaoptgaino.awsimageupload.datastore;

import com.joaoptgaino.awsimageupload.profile.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILES = new ArrayList<>();

    static {
        USER_PROFILES.add(new UserProfile(UUID.fromString("c03bf8d6-56f1-48ea-97c1-5c63ee3a129c"), "joaogaino", null));
        USER_PROFILES.add(new UserProfile(UUID.fromString("2ca7c4ab-d9ef-463b-92a2-8f5066f6410a"), "riribergamo", null));
    }

    public List<UserProfile> getUserProfiles() {
        return USER_PROFILES;
    }
}
