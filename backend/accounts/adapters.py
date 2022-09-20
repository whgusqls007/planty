from allauth.account.adapter import DefaultAccountAdapter


class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        data = form.cleaned_data
        user = super().save_user(request, user, form, False)
        date_of_birth = data.get("date_of_birth")
        if date_of_birth:
            user.date_of_birth = date_of_birth
            this_year = str(user.date_joined)[:4]
            birth_year = str(user.date_of_birth)[:4]

            age_group = (int(this_year) - int(birth_year) + 1) // 10

            if age_group <= 1:
                user.age_group = "10대"

            elif 2 <= age_group <= 3:
                user.age_group = "20-30대"

            elif 4 <= age_group <= 6:
                user.age_group = "40-60대"

            else:
                user.age_group = "70대 이상"
            
            
        user.save()
        return user